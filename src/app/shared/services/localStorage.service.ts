import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Characters } from "../interface/data.interface";
import { ToastrService } from "ngx-toastr";


const MY_FAVORITE = 'myFavorites'

@Injectable({ providedIn: 'root' })
export class LocalStorageservice {

    private charactersFavSucj = new BehaviorSubject<Characters[]>([]);
    charactersfav$ = this.charactersFavSucj.asObservable();

    constructor(private toastServi: ToastrService) {
        this.initialStorage();
    }

    addOremovefavorite(character: Characters): void {
        const { id } = character;
        const currentFav = this.getFavoriteCharacters();
        const found = !!currentFav.find((fav: Characters) => {
            return fav.id === id;
        });
        
        

        found ? this.removeFromFavorite(id) : this.addToFavorite(character)
    }

    private addToFavorite(chareacter: Characters): void {
        try {
            const currentFav = this.getFavoriteCharacters();
            localStorage.setItem(MY_FAVORITE, JSON.stringify([...currentFav, chareacter]));
            this.charactersFavSucj.next([...currentFav, chareacter]);
            this.toastServi.success(`${chareacter.name} added to favorite`,'Rick and Morty');
        } catch (error) {
            console.log("Error saving localstorage", error);
            this.toastServi.error(`Error saving localstorage ${error}`,'Rick and Morty');
        }

    }

    private removeFromFavorite(id: number): void {
        try {
            const currentFav = this.getFavoriteCharacters();
            const characters = currentFav.filter((item: { id: number; }) => item.id != id)
            localStorage.setItem(MY_FAVORITE, JSON.stringify([...characters]));
            this.charactersFavSucj.next([...characters]);
            this.toastServi.warning(`Remove from Favorite`,'Rick and Morty')
        } catch (error) {
            console.log("Error removing localstorage", error);
            this.toastServi.error(`Error removing localstorage ${error}`,'Rick and Morty');
        }
    }


    getFavoriteCharacters(): any {
        try {
            const charactersFavString = localStorage.getItem(MY_FAVORITE);
            if (charactersFavString !== null) {
                const charactersFav = JSON.parse(charactersFavString);
                this.charactersFavSucj.next(charactersFav);
                return charactersFav;
            } else {
                // Si el valor es null, devuelves un valor por defecto o haces algo en consecuencia.
                return null;
            }

        } catch (error) {
            console.log("Error getting favorite from localstorage", error);

        }

    }

    clearStorage(): void {
        try {
            localStorage.clear()
        } catch (error) {
            console.log("Error cleaning  localstorage", error);

        }
    }

    private initialStorage() {
        const currents = (localStorage.getItem(MY_FAVORITE));
        if (!currents) {
            localStorage.setItem(MY_FAVORITE, JSON.stringify([]));
        }

        this.getFavoriteCharacters();

    }




}//CIERRE CLASEimport 