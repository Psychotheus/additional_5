module.exports = function check(str, bracketsConfig) {
  // your solution
  let rules = [].concat(...bracketsConfig);

  let st = [];
  let index = 0;
  let same = false;
  //АЛГОРИТМ
  //если скобка открывающая -> добавим в стек
  //иначе -> eсли текущая скобка не закрывает предыдущую - строка некорректна
  // + проверка на одинаковые скобки
  for (let i = 0; i < str.length; i++) {
    index = rules.indexOf(str[i]);
    same = (rules[index] == rules[index + 1]);
    
    //проверка на одинаковые скобки
    if (same) {
      if (!st.includes(str[i])) {
        st.push(str[i]);
        continue;
      } else if (str[i] == st[st.length - 1]) {
        st.pop();
        continue;
      } else {
        return false;
      }

    }

    if (index % 2 == 0) {

      st.push(str[i]);

    } else if(st[st.length - 1] == rules[index - 1]) {

      st.pop();

    } else return false;
  }

  return (st.length == 0);
}