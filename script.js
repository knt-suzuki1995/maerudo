document.addEventListener('DOMContentLoaded', function() {
  // すべての入力フィールドを取得
  var inputs = document.querySelectorAll('input, textarea');

  // 各入力フィールドを読み取り専用に設定
  inputs.forEach(function(input) {
      input.setAttribute('readonly', true);
  });
});
