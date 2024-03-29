import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
        "id": 1,
        "bookName": "The Da Vinci Code",
        "popularity": 8.2
    },
    {
        "id": 2,
        "bookName": "Harry Potter and the Sorcerer's Stone",
        "popularity": 9.1
    },
    {
        "id": 3,
        "bookName": "The 7 Habits of Highly Effective People",
        "popularity": 9.5
    },
    {
        "id": 4,
        "bookName": "1984",
        "popularity": 8.9
    },
    {
        "id": 5,
        "bookName": "Pride and Prejudice",
        "popularity": 8.7
    },
    {
        "id": 6,
        "bookName": "Steve Jobs",
        "popularity": 8.4
    }
]


const PagesToRead = () => {
    return (
        <LineChart width={5000} height={400} data={data}>
            <Line type="monotone" dataKey="popularity" stroke="#8884d8" />
            <XAxis dataKey="bookName" />
            <YAxis dataKey='popularity' />
            <Tooltip />
            <Legend />
        </LineChart>
    );
};

export default PagesToRead;