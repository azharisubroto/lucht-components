/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it's mounted on the DOM.
 *
 * !This file cannot be removed.
 */
import Button from './direflow-components/an-button'

Button.then((element) => {
  /**
   * Access DOM node when it's mounted
   */
  console.log('an-button is mounted on the DOM', element)
})
