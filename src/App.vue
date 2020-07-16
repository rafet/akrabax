<template>
  <div>
    <div class="toolbar">
      <div class="logo">
        akrabax
        <span class="beta">çok beta</span>
      </div>
    </div>
    <div class="content">
      <div class="seq">
        {{ seqText }}
        <span :style="{ opacity: blink ? 1 : 0 }">|</span>
      </div>
      <center>
        <button
          @click="clickTitle(item)"
          v-for="(item, index) in titleFilter.sort((a, b) =>
            a.title > b.title ? 1 : -1
          )"
          :key="index"
          class="tag"
        >
          {{ item.title }}
        </button>
      </center>
      <hr
        style="border:1px solid;border-color:rgb(245, 245, 245) #fff #fff #fff;margin:10px 0;opacity:.2"
      />
      <div class="seq" style="text-align:center">
        <template v-for="(item, index) in resultText">
          <TitleItem v-if="index !== 0" :title="item" :key="index" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TitleItem from './components/TitleItem';
import titles from './titles';
import relations from './relations';
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TitleItem,
  },
  name: 'App',
  data() {
    return {
      titles,
      relations,
      blink: false,
      seq: [0],

      re: {
        'baba kız kardeş': 'hala',
        'baba erkek kardeş': 'amca',
        'anne erkek kardeş': 'dayı',
        'anne kız kardeş': 'teyze',
        'karı anne': 'kaynana',
        'karı baba': 'kayınpeder',
        'koca anne': 'kaynana',
        'koca baba': 'kayınpeder',
        'karı kız kardeş koca': 'bacanak',
        'koca erkek kardeş karı': 'elti',
        'amca karı': 'yenge',
        'dayı karı': 'yenge',
        'karı kız kardeş': 'baldız',
        'kız kardeş koca': 'enişte',
        'baba baba': 'dede',
        'anne baba': 'dede',
        'anne anne': 'anneanne',
        'baba anne': 'babanne',
        'kız kardeş baba': 'baba',
        'erkek kardeş baba': 'baba',
        'kız kardeş anne': 'anne',
        'erkek kardeş anne': 'anne',
        'karı koca': '',
        'karı erkek kardeş': 'kayınço',
        'çocuk çocuk': 'torun',
        'amca çocuk': 'kuzen',
        'dayı çocuk': 'kuzen',
        'dayı anne': 'anneanne',
        'çocuk karı': 'gelin',
        'çocuk koca': 'damat',
        'çocuk teyze': 'baldız',
        'hala baba': 'dede',
        'hala koca': 'enişte',
        'hala anne': 'babanne',
        'hala çocuk': 'kuzen',
        'teyze baba': 'dede',
        'teyze anne': 'anneanne',
        'teyze koca': 'enişte',
        'kuzen dede': 'dede',
        'baba karı': 'anne',
        'baba bacanak': 'enişte',
        'anne koca': 'baba',
        'gelin koca': 'çocuk',
        'koca kız kardeş': 'görümce',
        'baldız baba': 'kayınpeder',
        'baldız anne': 'kaynana',
        'amca anne': 'babanne',
      },
    };
  },
  computed: {
    titleFilter() {
      const last = this.getTitle(this.seq[this.seq.length - 1]);
      return this.titles.filter((x) => {
        if (x.id === 30) return false;
        if (!x.only || last.gender === x.only || last.gender === 'x')
          return true;
        return false;
      });
    },

    result() {
      const r = [...this.seq];
      for (let i = 0; i < this.relations.length * 4; i++) {
        const rel = this.relations[i % this.relations.length];
        let changed = true;
        while (changed) {
          const findIndex = this.findSubarray(r, rel.titles);
          if (findIndex !== -1) {
            r.splice(findIndex, rel.titles.length, rel.result);
          } else changed = false;
        }
      }
      console.log(r);
      return r;
    },
    resultText() {
      return this.result.map((x, index) => {
        console.log(x);
        const t = this.getTitle(typeof x === 'number' ? x : x[0]);
        let r = '';
        if (this.result.length === 2 && index === 1) r = t.mine;
        else if (index === 0) r = 'benim';
        else if (index === 1) r = t.mineSuffix;
        else if (index === this.result.length - 1) r = t.lastSuffix;
        else r = t.suffix;
        return {
          text: r,
          results: typeof x !== 'number' && x.length === 1 ? x[0] : x,
        };
      });
    },
    seqText() {
      return this.seq
        .map((x, index) => {
          const t = this.getTitle(x);
          if (this.seq.length === 2 && index === 1) return t.mine;
          if (index === 0) return 'benim';
          if (index === 1) return t.mineSuffix;
          if (index === this.seq.length - 1) return t.lastSuffix;

          return t.suffix;
        })
        .join(' ');
    },
  },
  created() {
    let s = 0;
    setInterval(() => {
      s += 1;
      if (s % 2 === 0) this.blink = !this.blink;
    }, 250);
  },
  methods: {
    findSubarray(arr, subarr) {
      for (var i = 0; i < 1 + (arr.length - subarr.length); i++) {
        var j = 0;
        for (; j < subarr.length; j++) if (arr[i + j] !== subarr[j]) break;
        if (j == subarr.length) return i;
      }
      return -1;
    },

    getTitle(id) {
      return this.titles[id];
    },
    replaceAll(string, search, replace) {
      return string.split(search).join(replace);
    },
    clickTitle(title) {
      this.seq.push(title.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  outline: none;
}
@import url('https://fonts.googleapis.com/css2?family=Nunito');
.logo {
  font-family: 'Nunito';

  font-size: 2em;
  padding: 0.5em;
  color: white;
  padding-left: 1.5em;
}
.content {
  margin: auto;
  margin-top: 4em;
  max-width: 1200px;
  padding: 0 10px;
}
.toolbar {
  /* position: fixed; */
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 76px;
  background: #227093;
  margin: 0;
}
.seq {
  font-family: 'Nunito';
  font-size: 3em;
  /* text-align: center; */
  color: #242424;
  margin-bottom: 0.75em;
}
.tag {
  font-family: 'Nunito';
  font-size: 1.6em;
  background: rgb(252, 252, 252);
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 14px;
  transition: 0.2s;

  color: #242424;
  margin: 10px 24px;
  box-shadow: -1px 5px 15px -4px rgba(0, 0, 0, 0.2);
}
.tag:hover {
  transform: scale(1.03);
}
.tag:active {
  transform: scale(0.97);
  border: 0 !important;
  outline: 0;
}
.beta {
  font-size: 12px;
}
</style>
