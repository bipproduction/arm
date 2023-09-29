import ConfigurationView from "./view/configuration_view";
import {
    CreateWarehouseLocation,
    TableWarehouseLocation,
    funGetAllWarehouseLocation,
    funGetOneWarehouseLocation,
    EditWarehouseLocation
} from "./warehouse_location/";
import { CreateSupplier, EditSupplier, TableSupplier, funGetAllSupplier, funGetOneSupplier } from "./supplier";
import { CreateBrand, EditBrand, TableBrand, funGetAllBrand, funGetOneBrand } from "./brand";
import { ListClient, funGetAllClient, funGetOneClient, EditClient, CreateClient, funGetDataClient } from './client'
import { AddUser, ViewUser, funGetAllUser, EditUser, funGetOneUser } from "./user";



export { ConfigurationView };
export { CreateWarehouseLocation }
export { TableWarehouseLocation }
export { funGetAllWarehouseLocation }
export { funGetOneWarehouseLocation }
export { EditWarehouseLocation }
export { CreateSupplier }
export { EditSupplier }
export { TableSupplier }
export { funGetAllSupplier }
export { funGetOneSupplier }
export { CreateBrand }
export { EditBrand };
export { TableBrand }
export { funGetAllBrand }
export { funGetOneBrand }
export { ListClient }
export { funGetAllClient }
export { funGetOneClient }
export { EditClient }
export { funGetDataClient }
export { CreateClient }
export { AddUser }
export { ViewUser }
export { funGetAllUser }
export { EditUser }
export { funGetOneUser }
