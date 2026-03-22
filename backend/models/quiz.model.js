import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document',
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },

    questions: [{
        question: {
            type: String,
            required: true,
            trim: true
        },
        options:{
            type: [String],
            required: true,
            validate: [arrayLimit, 'A question must have at least 2 options']
        },
        correctAnswer: {
            type: String,
            required: true
        },
        explanation: {
            type: String,
            default: ''
        },
        difficulty: {
            type: String,
            enum: ['easy', 'medium', 'hard'],
            required: true
        }
    }],
    useeAnswers: [{
        questionIndex: {
            type: Number,
            required: true
        },
        selectedAnswer: {
            type: String,
            required: true
        },
        isCorrect: {
            type: Boolean,
            required: true
        },
        answeredAt: {
            type: Date,
            default: Date.now
        }
    }],
    score: {
        type: Number,
        default: 0
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    completedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

// Indexx for faster retrieval of quizzes by user and document
quizSchema.index({ userId: 1, documentId: 1 });

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;