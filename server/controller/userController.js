export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password)
            return res.json({ success: false, message: 'missing details' });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.json({ success: false, message: 'user already exists' });

        const newUser = new User({ name, email, password });
        await newUser.save();
        return res.json({ success: true, message: 'user registered successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
}