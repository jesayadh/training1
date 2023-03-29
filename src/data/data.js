const data1 = ["abc", "def"];
const data2 = [123, 234];

const dataMap1 = {
  map1: "asd",
  map2: "sdf",
};

const dataMap2 = {
  map3: 234,
  map4: 345,
};

const dataMapGabung = { ...dataMap1, ...dataMap2 };
const datagabung = [...data1, ...data2];

var dataArticle = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    title: "title1",
    id: 1,
    text: "text1",
    footer: "footer1",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    title: "title2",
    id: 2,
    text: "text2",
    footer: "footer2",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    title: "title2",
    id: 3,
    text: "text2",
    footer: "footer2",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    title: "title2",
    id: 4,
    text: "text2",
    footer: "footer2",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1666262369867-6e521a979afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    title: "title2",
    id: 5,
    text: "text2",
    footer: "footer2",
  },
];

export default { data1, data2, datagabung, dataMapGabung, dataArticle };
