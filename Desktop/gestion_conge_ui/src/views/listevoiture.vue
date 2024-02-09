<template>
 <div>
    <table>
        <thead>
            <th>Id Voiture</th>
            <th>Marque</th>
            <th>Model</th>
            <th>Couleur</th>
        </thead>
        <tbody>
            <tr v-for="voiture in voitures ">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                <td>{{ voiture.id }}</td>
                <td>{{ voiture.marque }}</td>
                <td>{{ voiture.model }}</td>
                <td>{{ voiture.couleur }}</td>
            </tr> 
        </tbody>
    </table>
 </div>
</template> 

<script>
export default{
    data(){
        return{
            voitures:[
                {"id":1,"marque":"Toyota","model":"Probox","couleur":"Violet"},
                {"id":2,"marque":"Benz","model":"Hilux","couleur":"blanc"}
            ]
        }
    }
}
</script>
<style>

</style>