<template>
    <OverlayView title="Ajouter conge">
      <div class="form-group">
          <label>Id</label>
          <input type="date" v-model="id" autofocus required />
      </div>
      <div class="form-group">
          <label>Nom</label>
          <input type="date" v-model="nom" autofocus required />
      </div>
     
      <div>
        <input
          class="btn btn-primary"
          @click="enregistrer"
          type="submit"
          value="Ajouter"
        />
      </div>
    </OverlayView>
</template>

<script>
import OverlayView from "./overlay_view.vue"
export default {
  name: 'AddEmploye',
  components:{
    OverlayView,
  },
  data() {
    return {
      id:"",
      nom:"",
      prenom:"",
      age:"",
      genre:"",
      conge_debut:"",
      conge_fin:"",
    };
  },
  methods:{
    enregistrer(){
      let data = {
        id:this.id,
        nom:this.nom,
        prenom:this.prenom,
        age:this.age,
        genre:this.genre,
        conge_debut:this.conge_debut,
        conge_fin:this.conge_fin,
      }
      this.$emit("addEmploye", data)      
    }
  }
};
</script>

<style lang="css" scoped>
</style>
