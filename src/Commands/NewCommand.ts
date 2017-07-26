import { ConversionContext } from "../Conversions/ConversionContext";
import { Import } from "../Languages/Imports/Import";
import { NewProperties, NewInstantiationSyntaxKind } from "../Languages/Properties/NewProperties";
import { Command } from "./Command";
import { LineResults } from "./LineResults";
import { Parameter } from "./Parameters/Parameter";
import { RepeatingParameters } from "./Parameters/RepeatingParameters";
import { SingleParameter } from "./Parameters/SingleParameter";

/**
 * A command for instantiating an object of a given type.
 */
export class NewCommand extends Command {
    /**
     * Renderers for each possible render style.
     */
    private styleRenderers: { [i: number]: (parameters: string[]) => LineResults };

    /**
     * Information on parameters this command takes in.
     */
    private static parameters: Parameter[] = [
        new SingleParameter("typeName", "The type of the object to instantiate.", true),
        new RepeatingParameters(
            "Arguments to pass into the constructor",
            [
                new SingleParameter("argument", "Argument to pass into the constructor", false)
            ])
    ];

    /**
     * @returns Information on parameters this command takes in.
     */
    public getParameters(): Parameter[] {
        return NewCommand.parameters;
    }

    /**
     * Initializes a new instance of the Command class.
     * 
     * @param context   The driving context for converting the command.
     */
    constructor(context: ConversionContext) {
        super(context);

        this.styleRenderers = {
            [NewInstantiationSyntaxKind.MemberMethodCall]: this.renderMemberMethodCall.bind(this),
            [NewInstantiationSyntaxKind.MethodCall]: this.renderMethodCall.bind(this),
            [NewInstantiationSyntaxKind.Prefix]: this.renderPrefix.bind(this)
        };
    }

    /**
     * Renders the command for a language with the given parameters.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        return this.styleRenderers[this.language.properties.newProp.instantiationKind](parameters);
    }

    /**
     * Renders the New command in prefix style.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    private renderPrefix(parameters: string[]): LineResults {
        let result: string = "";

        // the parser ensures we have a class name here in the argument list
        let typeName: string = parameters[1];

        result += this.language.properties.newProp.keyword;
        result += " ";
        result += typeName;
        result += "(";
        if (parameters.length > 2) {
            result += parameters[2];
            for (let i: number = 3; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }
        }
        result += ")";

        return LineResults.newSingleLine(result, false);
    }

    /**
     * Renders the New command for a language in method call style.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    private renderMethodCall(parameters: string[]): LineResults {
        let result: string = "";

        // the parser ensures we have a class name here in the argument list
        let typeName: string = parameters[1];

        result += typeName;
        result += "(";
        if (parameters.length > 2) {
            result += parameters[2];
            for (let i: number = 3; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }
        }
        result += ")";

        return LineResults.newSingleLine(result, false);
    }

    /**
     * Renders the command for a language in member method call style.
     * 
     * @param parameters   The command's name, followed by any number of
     *                     items to initialize in the Array.
     * @returns Line(s) of code in the language.
     */
    private renderMemberMethodCall(parameters: string[]): LineResults {
        let result: string = "";

        let typeName: string = parameters[1];
        result += typeName;
        result += ".";
        result += this.language.properties.newProp.keyword;
        result += "(";
        if (parameters.length > 2) {
            result += parameters[2];
            for (let i: number = 3; i < parameters.length; i += 1) {
                result += ", " + parameters[i];
            }
        }
        result += ")";

        return LineResults.newSingleLine(result, false);
    }
}
