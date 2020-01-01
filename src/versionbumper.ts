import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as io from '@actions/io'
import * as github from '@actions/github'

export class VersionBumper
{
    bumpDotNetAssembly():void {
        let filePath = core.getInput("pathToFile");
    
        core.debug(`Filepath: ${filePath}`);
    }
}
