function getCheckboxValue() {
  const resultDiv = document.getElementById('result');
  const selectedGenres = [];

  // 각 체크박스의 상태를 확인하고, 체크된 항목을 배열에 추가
  if (document.getElementById('novel').checked) {
    selectedGenres.push('소설');
  }
  if (document.getElementById('computer').checked) {
    selectedGenres.push('IT');
  }
  if (document.getElementById('economy').checked) {
    selectedGenres.push('경제');
  }

  if (selectedGenres.length > 0) {
    resultDiv.innerHTML = '선택된 분야: ' + selectedGenres.join(',')
  } else {
    resultDiv.innerHTML = '';
  }
} 
