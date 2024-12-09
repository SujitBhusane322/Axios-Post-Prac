import React, { useEffect, useState } from 'react'
import { AXIOS_SINGLETON } from './Constants'

const Postmethod = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const postData = async () => {
            try {
                // Sample payload to send with the POST request
                const payload = {
                    title: 'Sample Title',
                    body: 'This is a sample post content.',
                    userId: 1
                };

                // Send POST request
                const res = await AXIOS_SINGLETON.post('/posts', payload);

                // Assuming the API echoes back the posted data
                setData([res.data]);// Set the response data as an array to display
                console.log('data is sucessfully post');
                
            } catch (error) {
                console.error("Error posting data:", error);
            }
        };
        postData();
    }, []);

    return (
        <>
            {data.map((item) => (
                <ul key={item.id}>
                    <li>{item.title}</li>
                </ul>
            ))}
        </>
    );
}

export default Postmethod;
