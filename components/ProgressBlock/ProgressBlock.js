import htmlTemplate from './htmlTemplate.js';

/**
 * Represents a custom progress block element.
 *
 * <progress-block state="Normal|Hidden" animated></progress-block>
 *
 * States:
 * • Normal – the base state where the size of the arc can be controlled by setting the 'value' attribute.
 * • Animated – an independent state where the block or its elements begin to rotate clockwise with a certain period.
 * • Hidden – a state that hides the block from the page.
 */
class ProgressBlock extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(htmlTemplate.content.cloneNode(true));

    this.progressBlock = this.shadowRoot.querySelector('.progress-container');
    this.circle = this.shadowRoot.querySelector('.progress-ring__circle');

    const circumference = this.getCircumference();
    this.circle.style.strokeDasharray = `${circumference} ${circumference}`;
    this.circle.style.strokeDashoffset = circumference;

    this.circle.addEventListener('animationiteration', () => {
      if (!this.hasAttribute('animated')) {
        this.circle.style.animation = 'none';
      }
    });
  }

  /**
   * Sets the progress of the progress block element.
   * @param {number} value - The value representing the progress percentage (0-100).
   */
  setProgress(value) {
    const circumference = this.getCircumference();

    value = Math.max(0, Math.min(value, 100));

    const offset = circumference - (value / 100) * circumference;
    this.circle.style.strokeDashoffset = offset;
  }

  /**
   * Calculates the circumference of the progress block's circle element.
   * @returns {number} The circumference of the circle.
   */
  getCircumference() {
    const R = this.circle.r.baseVal.value;
    return 2 * R * Math.PI;
  }

  static get observedAttributes() {
    return ['value', 'state', 'animated'];
  }

  connectedCallback() {
    this.setProgress(this.getAttribute('value'));
  }

  attributeChangedCallback(name, _, newValue) {
    switch (name) {
      case 'value':
        this.setProgress(newValue);
        break;
      case 'state':
        if (newValue === 'Hidden') {
          this.progressBlock.style.visibility = 'hidden';
        } else {
          this.progressBlock.style.visibility = 'visible';
        }
        break;
      case 'animated':
        this.circle.style.animation = 'rotation 1s linear infinite';
        break;
    }
  }
}

export default ProgressBlock;
