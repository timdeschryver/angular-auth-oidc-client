import { addPackageJsonDependencies } from './add-dependencies';
import { addModuleToImports } from './add-module-import';
import { copyModuleFile } from './copy-module-file';
import { installPackageJsonDependencies } from './install-dependencies';

export function getAllActions(options: any) {
    return [addPackageJsonDependencies(), installPackageJsonDependencies(), copyModuleFile(options), addModuleToImports(options)];
}
