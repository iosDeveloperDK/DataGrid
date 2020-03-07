import React, { useEffect } from 'react'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

class TodoList extends React.Component {
  items = [
    {
      name: 'Jcole - Love Yours',
      id: 1
    },
    {
      name: 'Kendirick Lamar - DNA',
      id: 2
    },
    {
      name: 'Ryth B - Lost boy ',
      id: 3
    },
    {
      name: 'Ruth B -  Chance',
      id: 4
    },
    {
      name: 'Jcole- Lost ones',
      id: 5
    },
    {
      name: 'Meek Mill- Cold heart ',
      id: 6
    }
  ]

  state = {
    favorites: []
  }

  toggleInFavorites = id => {
    let favorites
    const isItemInFavorites = this.state.favorites.find(
      favorite => favorite.id === id
    )
    if (isItemInFavorites) {
      // Item is already in favorites, remove it.
      favorites = this.state.favorites.filter(favorite => favorite.id !== id)
    } else {
      // Item is not in favorites, add it.
      favorites = [
        ...this.state.favorites,
        this.items.find(item => id === item.id)
      ]
    }
    this.setState({ favorites })
  }

  render() {
    return (
      <div className="container">
        <ul className="musicList">
          {this.items.map(({ id, name }) => (
            <li
              key={id}
              className="music"
              onClick={() => this.toggleInFavorites(id)}
            >
              {name}
              <span className="star">
                {this.state.favorites.find(favorite => favorite.id === id)
                  ? '★'
                  : '☆'}
              </span>
            </li>
          ))}
        </ul>
        <div className="favorites">
          <p>My Favorite Songs:</p>
          <TransitionGroup>
            {this.state.favorites.map(({ id, name }) => (
              <CSSTransition timeout={1500} classNames="fade" key={id}>
                <div className="favorite">{name}</div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default TodoList
