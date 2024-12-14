import React from 'react';
import { redirect } from 'next/navigation';
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
            { subtype: 'ps5' },
            { subtype: 'xbox' },
            { subtype: 'nintendo' },
            { subtype: 'pc' },
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
        <div className="subtype">
            {/* <h2>Subtypes for {type}:</h2> */}
            <div>
                {subtype.map((sub, index) => (
                    <h3 key={index}>
                        <a href={`#${sub.subtype}`}>{sub.subtype}</a>
                    </h3>
                ))}
            </div>
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
        <h1>{type}</h1>
    )
    
}

export {TypeHeading , SubTypeHeading}