const fileInput = document.querySelector('input');
  const preview = document.getElementById('preview');

  fileInput.addEventListener('change', () => {
    const fr = new FileReader();
    fr.readAsText(fileInput.files[0]);
    fr.addEventListener('load', () => {
      preview.textContent = fr.result;
    })
  })
