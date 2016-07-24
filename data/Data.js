import PersonData from './PersonData';

const getQuestion = (category) => {
  switch (category) {
    case "이름":
      return PersonData.list[0];
    default:
      console.warn("make new category");
      return {};
  }
}

export { getQuestion };
