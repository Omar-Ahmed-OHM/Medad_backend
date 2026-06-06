import Hadith from '../models/Hadith.js';
import pagination from '../utils/paginate.js';

export const getAllHadith = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;

    const result = await pagination(
      Hadith,
      page,
      limit,
      {},
      { id: 1 }
    );

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const searchHadith = async (req, res) => {
  try {
    const query = req.query.search;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;

    if (!query || !query.trim()) {
      const result = await pagination(
        Hadith,
        page,
        limit,
        {},
        { id: 1 }
      );

      return res.status(200).json(result);
    }

    const skip = (page - 1) * limit;

    let [totalItems, hadiths] = await Promise.all([
      Hadith.countDocuments({
        $text: { $search: query }
      }),

      Hadith.find(
        { $text: { $search: query } },
        { score: { $meta: 'textScore' } }
      )
        .sort({ score: { $meta: 'textScore' } })
        .skip(skip)
        .limit(limit)
    ]);

    if (totalItems === 0) {
      const fuzzyRegex = new RegExp(
        query.split('').join('.*'),
        'i'
      );

      totalItems = await Hadith.countDocuments({
        $or: [
          { text: fuzzyRegex },
          { title: fuzzyRegex }
        ]
      });

      hadiths = await Hadith.find({
        $or: [
          { text: fuzzyRegex },
          { title: fuzzyRegex }
        ]
      })
        .skip(skip)
        .limit(limit);
    }

    res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      data: hadiths
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};