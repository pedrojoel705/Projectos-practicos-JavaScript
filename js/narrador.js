const d = document;

export default function speechReader() {
  const $speechSelect = d.getElementById('speech-select');
  const $speechTextarea = d.getElementById('speech-text');
  const $speechBtn = d.getElementById('speech-btn');
  const speechMessage = new SpeechSynthesisUtterance();

  let voices = [];

  d.addEventListener('DOMContentLoaded', (e) => {
    window.speechSynthesis.addEventListener('voiceschanged', (e) => {
      voices = window.speechSynthesis.getVoices();

      voices.forEach((voice) => {
        const $option = d.createElement('option');
        $option.value = voice.name;
        $option.textContent = `${voice.name}--${voice.lang}`;
        $speechSelect.appendChild($option);
      });
    });
  });
  d.addEventListener('change', (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      );
      console.log(speechMessage);
    }
  });

  d.addEventListener('click', (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechTextarea.value;
      window.speechSynthesis.speak(speechMessage);
    }
  });
}
