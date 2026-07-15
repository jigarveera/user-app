import { User } from '../models/userSchema.js';

export const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully',   
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating user',
            error: error.message
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            count: users.length,
            data: users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error fetching users',
            error: error.message
        })
    }
}

export const getUserByName = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User: ${username} not found`
            })
        }
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error fetching user',
            error: error.message
        })
    }
}