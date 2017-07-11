import { NativeCallProperties } from "../Languages/Properties/NativeCallProperties";
import { NativeCallCommand } from "./NativeCallCommand";
import { Parameter } from "./Parameters/Parameter";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for a list delete statement.
 */
export class ListDeleteCommand extends NativeCallCommand {
    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("name", "The name of the list.", true),
        new SingleParameter("value", "An item to delete from the list.", true),
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return ListDeleteCommand.parameters;
    }

    /**
     * @returns Metadata on how to perform the native call. 
     */
    protected retrieveNativeCallProperties(): NativeCallProperties {
        return this.language.properties.lists.delete;
    }
}
