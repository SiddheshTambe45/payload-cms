import React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
type subType = {
    subtype: string,
}

const fetchSubType = async (type?: string): Promise<subType[]> => {
    // Static data for different types
    const staticData: Record<string, subType[]> = {
        tech: [
            { subtype: 'techdeals' },
            { subtype: 'news' },
        ],
        mobile: [
            { subtype: 'smartphone' },
            { subtype: 'accessory' },
        ],
        stock: [
            { subtype: 'stock' }, // Add relevant subtypes here
        ],
        entertainment: [
            { subtype: 'movie' },
            { subtype: 'series' },
            { subtype: 'comic' },
        ],
        games: [
            { subtype: 'PS5' },
            { subtype: 'Xbox' },
            { subtype: 'Nintendo' },
            { subtype: 'PC' },
        ],
    };

    // If a type is provided, filter and return the corresponding subtypes
    if (type) {
        // Check if the type exists in the static data, else return an empty array
        return staticData[type.toLowerCase()] || [];
    }

    // If no type is provided, return all available subtypes across all types
    return [
        ...staticData.tech,
        ...staticData.mobile,
        ...staticData.stock,
        ...staticData.entertainment,
        ...staticData.games,
    ];
};

const SubTypeHeading = async ({ params }: { params: { type: string } }) => {
    const type: string = params.type;
    const subtype: subType[] = await fetchSubType(type);

    return (
        <div className="subtype my-3 w-full h-[30px] flex justify-center items-center m-0 p-0 mt-2">
            {/* <h2>Subtypes for {type}:</h2> */}
            {/* <div className=''> */}
                {subtype.map((sub, index) => (
                    <h4 key={index} className='mx-3 text-lg font-semibold  generic-viridian'>
                        <Link href={`#${sub.subtype}`}>{sub.subtype}</Link>
                    </h4>
                ))}
            {/* </div> */}
        </div>
    )
}
const TypeHeading = ({ params }: { params: { type: string } }) => {
    const type: string = params.type;

    // Validate `type` parameter and redirect if invalid
    if (!type || type.trim() === '') {
        redirect('/');
    }

    return (
        <div className="typediv w-full h-[100px] custom-bg flex justify-center items-center m-0 p-0">
            <Link href={`#${type}`} >
                <h1 className='heading-font h2 font-bold'>
                    {type.charAt(0).toUpperCase() + type.slice(1)} {/* Corrected this line */}
                </h1>
            </Link>
        </div>
    );
};

export {TypeHeading , SubTypeHeading}