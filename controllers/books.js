// @desc    Get all books
// @route   GET /api/v1/books
// @access  Public
exports.getBooks = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all books'
    })
}
// @desc    Get single book
// @route   GET /api/v1/books/:id
// @access  Public
exports.getBook = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Show book with id ${req.params.id}`
    })
}
// @desc    Create new book
// @route   POST /api/v1/books
// @access  Private
exports.createBook = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Create a new book'
    })
}
// @desc    Update a book
// @route   PUT /api/v1/books
// @access  Private
exports.updateBook = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update book with id ${req.params.id}`
    })
}
// @desc    Delete a book
// @route   DELETE /api/v1/books
// @access  Private
exports.deleteBook = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete book with id ${req.params.id}`
    })
}