<template>
  <div>
    <div>
      <p> multiple  倍数，决定了选择日期是否可多选</p>
      <p> 如果选择日期后不进行其他操作，  @input="changeDate(date)" 可写成 ： @input="$refs.menu.save(date)"</p>
    </div>
    <v-menu
      ref="menu"
      :close-on-content-click="false"
      v-model="menu"
      :nudge-right="40"
      :return-value.sync="date"
      lazy
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <v-text-field slot="activator" v-model="date" label="开始日期" prepend-icon="event" readonly></v-text-field>
      <v-date-picker multiple v-model="date" :max="date1[0]" @input="changeDate(date)"></v-date-picker>
    </v-menu>

    <v-menu
      ref="menu1"
      :close-on-content-click="false"
      v-model="menu1"
      :nudge-right="40"
      :return-value.sync="date1"
      lazy
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <v-text-field slot="activator" v-model="date1" label="结束日期" prepend-icon="event" readonly></v-text-field>
      <v-date-picker multiple v-model="date1" :min="date[0]" @input="changeDate1(date1)"></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      date: [],
      menu1: false,
      date1: [],
    };
  },
  watch: {
    "date": function (val) {
      if (val && val.length > 1) {
        this.date.splice(0, 1)
      }
    },
    "date1": function (val) {
      if (val && val.length > 1) {
        this.date1.splice(0, 1)
      }
    }
  },
  methods: {
    changeDate (val) {
      this.$refs.menu.save(val)
    },
    changeDate1 (val) {
      this.$refs.menu1.save(val)
    }
  }
};
</script>
