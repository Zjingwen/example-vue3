<template>
  <div id>
    <p>Has published books:</p>
    <div>
      <input type="text" v-model="fullName" />
    </div>
    <div>firstName: {{firstName}}</div>
    <div>lastName: {{lastName}}</div>
    <hr />
    <p>{{publishedBooksMessage}}</p>
    <p>{{calculateBooksMessage()}}</p>
    <div>
      <button @click="handleAdd">+</button>
      <button @click="handleRmove">-</button>
    </div>
    <p v-for="(item,index) in author.books" :key="index">{{item}}</p>
    <hr />
    <input type="text" v-model="value" />
    <p>{{value}}</p>
    <p>{{answer}}</p>
    <img :src="image" alt="loading">
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "watchers",
  data: () => ({
    author: {
      name: "John Doe",
      books: [
        `Vue ${Math.random()}`,
        `Vue ${Math.random()}`,
        `Vue ${Math.random()}`
      ]
    },
    firstName: "zhou",
    lastName: "jingwen",
    value: "",
    answer: "",
    image: "",
  }),
  watch: {
    value(newValue, oldValue) {
      if (newValue.indexOf('?') > -1) {
        this.handleWatch(); 
      }
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    fullName: {
      get() {
        return this.firstName + " " + this.lastName;
      },
      set(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  methods: {
    handleWatch(){
      axios
      .get('https://yesno.wtf/api')
      .then(response => {
        this.answer = response.data.answer;
        this.image = response.data.image;
      })
      .catch(error => {
        this.answer = 'Error! Could not reach the API. ' + error
        this.image = 'Error! Could not reach the API. ' + error
      })
    },
    handleAdd() {
      this.author.books.push(`Vue ${Math.random()}`);
    },
    handleRmove() {
      this.author.books.shift();
    },
    calculateBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    }
  }
};
</script>