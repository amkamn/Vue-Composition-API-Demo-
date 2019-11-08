import { reactive, toRefs,ref,computed } from "@vue/composition-api";

export default () => {
  const state = reactive({
    name: "Vue Composition API ",
    names: [],
    item: ""
  });
  let keke = ref(5);
  let length = computed(() => {
    return keke.value - 1;
  });

  function add() {
    if (state.item.length > 0) {
      state.names.push(state.item);
      state.item = "";
    } else {
      alert("Fill the input!");
    }
  }
  function addValue(){
    keke.value++;
  }
  function remove() {
    if (state.names.length > 0) {
      state.names.pop();
    } else {
      alert("First add name");
    }
  }
  return { ...toRefs(state), add, remove,keke,length,addValue };
};
