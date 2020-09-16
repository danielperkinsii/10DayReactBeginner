import React, { Component } from 'react'
const baseURL = 'https://anapioficeandfire.com/api/characters/'
class Thrones extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        characters: []
    }

    getCharacter = () => {
        let numCharacters = []
        for(let i=0; i<2138; i++){
            numCharacters.push(i)
        }
        const randomCharacter = (numCharacters[Math.floor(Math.random()*numCharacters.length)])
        console.log(randomCharacter)

        fetch(baseURL + randomCharacter)
        .then(res => res.json())
        .then(
            (result) => {
                let copyCharacters = [...this.state.characters]
                copyCharacters.push(result)
                this.setState({
                    isLoaded: true,
                    characters: copyCharacters
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )


    }

    componentDidMount() {
        this.getCharacter()
    }

    render () {
        return (
            <div className=''>
                <h4>Game of Thrones</h4>
                <p>Get a Random Thrones Character! There are <strong>2138 Characters</strong>!</p>
                <button onClick={this.getCharacter}>get random character</button>
                {console.log(this.state.characters)}
                <div className='users'>
                {this.state.characters.map((character, index) => (
                    <div key={index}>
                        <h3>Name: {character.name}</h3>
                        <p>Culture: {character.culture}</p>
                        <p>Born: {character.born}</p>
                        <p>Died: {character.died}</p>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

export default Thrones