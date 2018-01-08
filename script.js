var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://i.imgur.com/0JuDj1k.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://i.imgur.com/CgApJfh.jpg'
    },
    {
        id: 3,
        title: 'The Lord of the ring',
        desc: 'Film drogi o wycieczce pierścienia',
        image: 'https://i.imgur.com/t686ZZJ.jpg'
    },
    {
        id: 4,
        title: 'Złoty kompas',
        desc: 'Film o dajmonach i ich panach',
        image: 'https://i.imgur.com/vpvYf1o.jpg'
    },
    {
        id: 5,
        title: 'Eternal Sunshine of the Spotless Mind',
        desc: 'Film o wymazywaniu pamięci',
        image: 'https://i.imgur.com/3Qaz1qv.jpg'
    },
    {
        id: 6,
        title: 'Inglourious Basterds',
        desc: 'Film o wojnie według Tarantino',
        image: 'https://i.imgur.com/VbfjkWO.jpg'
    }

];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieImage, {
                    img: this.props.movie.image
                })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    }
})

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc)
    }
})

var MovieImage = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {
            src: this.props.img
        })
    }
})

var MovieElements = movies.map(function(movie) {
    return (
        React.createElement(Movie, {
            key: movie.id,
            movie: movie
        })
    )
});

var MovieList = React.createClass({
    render: function() {
    	return (
        	React.createElement('ul', {}, MovieElements)
        )
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));