/**
 * UI动画组件库
 * */
import Render from 'common/render'//公共方法
import Utils from 'common/utils'//公共方法
import Velocity from 'velocity-animate'//JavaScript动画库
import 'bootstrap'
import 'assets/styles/ui.css'
import 'bootstrap/dist/css/bootstrap.css'//bootstrap.css

class UserInterface extends Render {
  constructor() {
    super()
  }

  alert(options) {
    if (!Utils.isEmptyObject(options)) {
      return false
    }

    // type primary secondary success danger warning info light dark
    let {content = '', type = 'success', time = 2000} = options

    let template = `<div class='alert alert-${type}' role='alert'>${content}</div>`

    let root = this.getRoot()

    var element = this.appendChild(root, template)

    if (time) {
      Velocity(element, 'fadeOut', {
        delay: time,
        duration: 500,
        complete: (elements) => {
          this.deleteNodes(elements)
        }
      })
    }
  }

  modal(options) {
    if (typeof options !== 'object' || $('#modal').length) {
      return false
    }

    let {titile = '', content = '', showButton = true, cancelText = 'Cancel', confirmText = 'Confirm', cancel = null, confirm = null, complete = null} = options
    let template = `
      <div id="modal" class="modal fade" tabindex="-1" role="dialog" data-show="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">${titile}</h4>
            </div>
            <div class="modal-body">
            ${content}
            </div>
            <div class="modal-footer" style="display: ${showButton ? 'block' : 'none'}">
              <button id="cancel" style="visibility: ${cancelText ? 'visible' : 'hidden'}" type="button" class="btn btn-default" data-dismiss="modal">${cancelText}</button>
              <button id="confirm" style="visibility: ${confirmText ? 'visible' : 'hidden'}" type="button" class="btn btn-primary">${confirmText}</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
    `
    let root = this.getRoot()
    let element = this.appendChild(root, template)
    $('#modal').modal('show')
    $('#modal').on('hidden.bs.modal', (event) => {
      complete && complete()
      this.deleteNode(element)
    })
    $('#cancel').click(function () {
      $('#modal').modal('hide')
      cancel && cancel()
    })
    $('#confirm').click(function () {
      $('#modal').modal('hide')
      confirm && confirm()
    })
    return $('#modal')
  }

  hideLeft(callback) {
    let left = this.getNode('left')
    let center = this.getNode('center')
    Velocity(left, {width: 0,}, {easing: 'ease-out'})
    Velocity(center, {
      left: 0,
      complete: () => {
        callback && callback()
      }
    }, {easing: 'ease-out'})
  }

  showLeft() {
    let left = this.getNode('left')
    let center = this.getNode('center')
    Velocity(left, {width: '2.6rem',}, {easing: 'ease-in'})
    Velocity(center, {
      left: '2.6rem',
      complete: () => {
        callback && callback()
      }
    }, {easing: 'ease-in'})
  }

  hideRight() {
    let right = this.getNode('right')
    let center = this.getNode('center')
  }

  showRight() {
    let right = this.getNode('right')
    let center = this.getNode('center')
  }
}

export default UserInterface