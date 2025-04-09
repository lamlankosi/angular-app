import { Injectable } from '@angular/core';
import { HousingLocation } from './house-listing/housinglocation/housinglocation.component';
@Injectable({
    providedIn: 'root',
})
export class HousingService {
    url = "http://localhost:3000/locations";

    async getAllHousingLocations(): Promise<HousingLocation[]> {
        const data = await fetch(this.url);
        return await data.json() ?? [];
    }

    async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
        try {
            const allHomes = await this.getAllHousingLocations();
            return allHomes.find(home => home.id === id);

            //Direct fetch (if your JSON server supports this endpoint)
            // const data = await fetch(`${this.url}/${id}`);
            // if (!data.ok) {
            //     throw new Error(`Failed to fetch housing location with id ${id}`);
            // }
            // return await data.json();
        } catch (error) {
            console.error(`Error fetching housing location with id ${id}:`, error);
            return undefined;
        }
    }

    submitApplication(firstName: string, lastName: string, email: string) {
        console.log(
            `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
        );
    }
}
