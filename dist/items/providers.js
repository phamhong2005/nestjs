"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemProviders = void 0;
const items_1 = require("./items");
exports.ItemProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(items_1.Item),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map