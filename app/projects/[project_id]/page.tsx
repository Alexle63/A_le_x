"use client";
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface projectJSON {
    title: string,
    linkTitle: string,
    img: string,
    pageImgs: string[],
    date: string,
    desc: string,
    authors: string[],
    skills: string[],
    links: string[]
}

export default function Page() {
    const router = useRouter();
    const { project_id } = useParams();
    const [data, setData] = useState<projectJSON | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/getJSON/?project_id=${project_id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [project_id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>Data not loaded.</p>
    return (
        <div className="flex flex-col h-full w-full">
            <h3 onClick={() => router.back()} className="linkhover font-normal mb-2 ">&lt; Back</h3>
            <h1>{data.title}</h1>
            <h3 className='pl-4 font-semibold'>{data.date}</h3>
            <div className='flex pt-2 flex-1 overflow-hidden'>
                <div className='flex w-2/5 gradbg'>
                    <img src={data.pageImgs[0]} className='rounded-md aspect-square object-cover' alt={data.title} />
                </div>
                <div className='flex flex-col w-1/5 p-4 overflow-hidden space-y-4'>
                    <div className='flex-1 px-4 overflow-y-auto overflow-x-clip'>
                        <h3 className='text-2xl'>Contributors</h3>
                        <div className='px-4 '><ul >
                            {data.authors.map((author) =>
                                <li>{author}</li>
                            )}
                        </ul></div>
                    </div>
                    <div className='flex-1 px-4 overflow-y-auto overflow-x-clip'>
                        <h3 className='text-2xl'>Skills</h3>
                        <div className='px-4 '><ul >
                            {data.skills.map((skill) =>
                                <li>{skill}</li>
                            )}
                        </ul></div>
                    </div>
                    {/* <p>{JSON.stringify(data, null, 2)}</p> */}

                </div>
                <div className='flex flex-col w-2/5 pb-4 pr-4 justify-between '>

                    {/* <p>{JSON.stringify(data, null, 2)}</p> */}
                    <div className='overflow-y-auto my-auto  text-center align-center'>
                        <p>{data.desc}</p>
                    </div>
                    <div>
                        <h3>Links</h3>
                        <ul>
                            {data.links.map((link) =>
                                <>
                                    <Link className="hoverlink underline" href={link}>{link}</Link>
                                    <br />
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
