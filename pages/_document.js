import NextDocument, { 
	Head, 
	Html, 
	Main,
	NextScript 
} from 'next/document';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head/>
				<link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Roboto:wght@300;400;500&display=swap' rel='stylesheet' />
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
