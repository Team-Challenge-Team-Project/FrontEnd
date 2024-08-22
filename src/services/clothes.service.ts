import httpService from './http.service';
import { ApiResponse, ClothesByFilters, ClothingItem, ClothingItems } from './types'

const clothesEndpoint = '/public/clothes';


const clothesService = {
  getAll: async (): Promise<ClothingItems> => {
    try {
      const response = await httpService.get<ApiResponse<ClothingItems>>(
        clothesEndpoint
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching clothes:', error);
      throw error;
    }
  },
  getById: async (id): Promise<ClothingItem> => {
    try {
      const response = await httpService.get<ApiResponse<ClothingItem>>(
        `/public/cloth/${id}`
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching clothes:', error);
      throw error;
    }
  },
  getClothesByFilters: async (
    filters: ClothesByFilters
  ): Promise<ClothingItems> => {
    try {
      const queryParams = new URLSearchParams(
        filters as Record<string, string>
      ).toString();

      const response = await httpService.get<ApiResponse<ClothingItems>>(
        `${clothesEndpoint}?${queryParams}`
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching filtered clothes:', error);
      throw error;
    }
  },
};

export default clothesService;
