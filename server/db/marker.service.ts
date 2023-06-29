import type {PrismaClient} from '@prisma/client';
import InitializedPrismaClient from './prisma';

export class MarkerService {
    private readonly prisma: PrismaClient;

    constructor() {
        this.prisma = InitializedPrismaClient;
    }

    async getMarkers(user: string) {
        try {
            const markers = await this.prisma.marker.findMany({
                where: {
                    user
                },
                orderBy: [
                    {
                        name: 'asc'
                    }
                ]
            });

            return [markers, null];
        } catch {
            return [null, {message: 'Error getting markers'}];
        }
    }

    async addMarker(user: string, name: string, lat: number, lng: number) {
        try {
            const marker = await this.prisma.marker.create({
                data: {
                    user,
                    name,
                    lat,
                    lng
                }
            });

            return [marker, null];
        } catch (error) {
            return [null, {message: 'Error adding marker'}];
        }
    }

    async deleteMarker(user: string, marker: string) {
        try {
            await this.prisma.marker.deleteMany({
                where: {
                    id: marker,
                    user
                }
            });
        } catch (error) {
            return {message: 'Error deleting marker'};
        }
    }
}