interface PostCardShape {
	profilePicture: string;
	postPicture: string;
	name: string;
	breed: string;
	caption: string;
	likes: number;
}

export const PostCard: PostCardShape[] = [
	{
		profilePicture: 'https://i.pinimg.com/564x/03/25/95/032595053ac84e08544502b5ceb0a9f1.jpg',
		postPicture: 'https://i.pinimg.com/564x/de/9d/c8/de9dc84fed43f954b1425b65d032666c.jpg',
		name: 'Luna',
		breed: 'Golden Retriever',
		caption: 'loving my new bows',
		likes: 127,
	},
	{
		profilePicture: 'https://i.pinimg.com/564x/e0/b5/b6/e0b5b65a08f43e9d65ccf4b61534a717.jpg',
		postPicture: 'https://i.pinimg.com/564x/a9/3e/bc/a93ebc25663b7b7bed756c756f2004a2.jpg',
		name: 'Prince',
		breed: 'Orange Cat',
		caption: 'Im getting bigger every day',
		likes: 127,
	},
	{
		profilePicture: 'https://i.pinimg.com/564x/b6/29/54/b62954f9b21cf96f3a7657f109593dd9.jpg',
		postPicture: 'https://i.pinimg.com/564x/d0/f0/64/d0f064580ef8ccd0672d1ba60ae378ae.jpg',
		name: 'Sebs',
		breed: 'Cockatiels',
		caption: 'I look nice from the back',
		likes: 127,
	},
	{
		profilePicture: 'https://i.pinimg.com/564x/31/1a/97/311a9752558f328ebcfc14dd3467e5e2.jpg',
		postPicture: 'https://i.pinimg.com/736x/89/fc/b3/89fcb31172ba9899ef3a4e709a85e90b.jpg',
		name: 'Sandy',
		breed: 'Squirrel',
		caption: 'Conecting with nature',
		likes: 127,
	},
];
