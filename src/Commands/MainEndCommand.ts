import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { LineResults } from "./LineResults";

/**
 * A command for ending a main function.
 */
export class MainEndCommand extends Command {
    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output: CommandResult[] = [];
        let source: string[] = this.language.properties.style.mainEndLines;

        for (let i: number = 0; i < source.length; i += 1) {
            output.push(new CommandResult(source[i], 0));
        }

        if (output.length !== 0) {
            output[0].indentation = -this.language.properties.style.mainIndentation;
        }

        return new LineResults(output, false);
    }
}
