import Component from 'common/component'
import node from './player.html'
import './player.scss'

class Player extends Component {
  constructor() {
    super()

    this.render('player', node, () => {

    })
  }
}

export default Player