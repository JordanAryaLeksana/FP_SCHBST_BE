


export default function handleError(err, req, res, next) {
    console.error(err.stack); // Changed from console.log to console.error for error stacks
    res.status(500).json({ success: false, message: err.message });
}
