<template>
    <section class="wrapper">
        <div class="separator">
            <!-- <div></div> -->
            <strong>Liste des utilisateur</strong>

            <div class="interaction">
                <div class="search-filter">
                    <div class="search-items">
                        <input
                            type="search"
                            placeholder="Chercher..."
                        />
                    </div>
                </div>
                <div>
                    <button class="btn btn-add" @click="openModal">
                        <i class="mdi mdi-plus"></i>
                        Ajouter Employé
                    </button>
                </div>
            </div>
        </div>

        <div class="table-container">
            <div class="table-wrap-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Age</th>
                            <th>Genre</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="employe in listeEmployes"
                            :key="employe.id"
                            >
                            <td>{{employe.nom}}</td>
                            <td>{{employe.prenom}}</td>
                            <td>{{employe.age}}</td>
                            <td>{{employe.genre}}</td>
                            <td>{{employe.conge_debut}}</td>
                            <td class="act">
                                <button
                                   
                                    class="btn-sm btn-primary"
                                    @click="OpenModal"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Ajouter Congé
                                </button>
                                <button
                                    
                                    class="btn-sm btn-primary"
                                    @click="ModifierEmploye(employe)"
                                >
                                    <i class="mdi mdi-pencil"></i>
                                    Modifier
                                </button>
                                <button
                                    class="btn-sm btn-danger"
                                >
                                    <i class="mdi mdi-delete"></i>
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <ModalAddEmploye 
            v-if="add_employe_shown"
            @close="close"
            @addEmploye="addEmploye"
        ></ModalAddEmploye>
        <ModalAddConge
            v-if="add_conge_shown"
            @Close="Close"
            @addConge="addConge"
        ></ModalAddConge>
        <ModalModifierEmploye 
        v-if="add_conge_shown"
            @Close="Close"
            @addConge=""></ModalModifierEmploye>
    </section>
</template>
<script>
import ModalAddEmploye from "../components/dialog_add_employe.vue"
import ModalAddConge from "../components/dialog_add_conge.vue"
import ModifierEmploye from "../components/dialog_ModifierEmploye.vue"
export default {
    mounted(){
        console.log("Acces au composant ListeEmployes")
    },
    components:{ModalAddEmploye , ModalAddConge,ModifierEmploye},
    data(){
        return{
            add_employe_shown:false,
            listeEmployes:[
                {
                    id:1,
                    nom:"Artcal'O",
                    prenom:"Lone Wolf",
                    age:45,
                    genre:"F",
                    conge_debut:null,
                    conge_fin:null
                },
                {
                    id:2,
                    nom:"TLW",
                    prenom:"Wolverine",
                    age:45,
                    genre:"F",
                    conge_debut:null,
                    conge_fin:null
                },
            ],
            colors:[
                {color:"Orange"},
                {color:"Blue"},
                {color:"Magnenta"},
                {color:"Indigo"},
                {color:"Black"}
            ],
            add_conge_shown:false
        }
    },
    methods:{
        openModal(){
            this.add_employe_shown=true
        },
        close(){
            this.add_employe_shown=false
        },
        addEmploye(data){
            this.close()
            this.listeEmployes.push(data)
        },OpenModal(){
            this.add_conge_shown=true
        },
        Close(){
            this.add_conge_shown=false
        },ModifierEmploye(employe){
            console.log(employe)
        }

    }
}
</script>

<style scoped>
.en_conge{
    background-color:red;
}
</style>
