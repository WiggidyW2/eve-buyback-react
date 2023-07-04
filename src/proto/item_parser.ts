// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "item_parser.proto" (package "item_parser_proto", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message item_parser_proto.ParseReq
 */
export interface ParseReq {
    /**
     * @generated from protobuf field: string text = 1;
     */
    text: string;
    /**
     * @generated from protobuf field: string language = 2;
     */
    language: string;
}
/**
 * @generated from protobuf message item_parser_proto.KnownItem
 */
export interface KnownItem {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: int64 quantity = 2;
     */
    quantity: bigint;
    /**
     * @generated from protobuf field: uint32 type_id = 3;
     */
    typeId: number;
}
/**
 * @generated from protobuf message item_parser_proto.UnknownItem
 */
export interface UnknownItem {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: int64 quantity = 2;
     */
    quantity: bigint;
}
/**
 * @generated from protobuf message item_parser_proto.ParseRep
 */
export interface ParseRep {
    /**
     * @generated from protobuf field: repeated item_parser_proto.KnownItem known_items = 1;
     */
    knownItems: KnownItem[];
    /**
     * @generated from protobuf field: repeated item_parser_proto.UnknownItem unknown_items = 2;
     */
    unknownItems: UnknownItem[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ParseReq$Type extends MessageType<ParseReq> {
    constructor() {
        super("item_parser_proto.ParseReq", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ParseReq>): ParseReq {
        const message = { text: "", language: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ParseReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParseReq): ParseReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.text = reader.string();
                    break;
                case /* string language */ 2:
                    message.language = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ParseReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string text = 1; */
        if (message.text !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.text);
        /* string language = 2; */
        if (message.language !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.language);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message item_parser_proto.ParseReq
 */
export const ParseReq = new ParseReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KnownItem$Type extends MessageType<KnownItem> {
    constructor() {
        super("item_parser_proto.KnownItem", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "type_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<KnownItem>): KnownItem {
        const message = { name: "", quantity: 0n, typeId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KnownItem>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KnownItem): KnownItem {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* int64 quantity */ 2:
                    message.quantity = reader.int64().toBigInt();
                    break;
                case /* uint32 type_id */ 3:
                    message.typeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: KnownItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* int64 quantity = 2; */
        if (message.quantity !== 0n)
            writer.tag(2, WireType.Varint).int64(message.quantity);
        /* uint32 type_id = 3; */
        if (message.typeId !== 0)
            writer.tag(3, WireType.Varint).uint32(message.typeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message item_parser_proto.KnownItem
 */
export const KnownItem = new KnownItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UnknownItem$Type extends MessageType<UnknownItem> {
    constructor() {
        super("item_parser_proto.UnknownItem", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<UnknownItem>): UnknownItem {
        const message = { name: "", quantity: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UnknownItem>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UnknownItem): UnknownItem {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* int64 quantity */ 2:
                    message.quantity = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UnknownItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* int64 quantity = 2; */
        if (message.quantity !== 0n)
            writer.tag(2, WireType.Varint).int64(message.quantity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message item_parser_proto.UnknownItem
 */
export const UnknownItem = new UnknownItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ParseRep$Type extends MessageType<ParseRep> {
    constructor() {
        super("item_parser_proto.ParseRep", [
            { no: 1, name: "known_items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => KnownItem },
            { no: 2, name: "unknown_items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UnknownItem }
        ]);
    }
    create(value?: PartialMessage<ParseRep>): ParseRep {
        const message = { knownItems: [], unknownItems: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ParseRep>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ParseRep): ParseRep {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated item_parser_proto.KnownItem known_items */ 1:
                    message.knownItems.push(KnownItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated item_parser_proto.UnknownItem unknown_items */ 2:
                    message.unknownItems.push(UnknownItem.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ParseRep, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated item_parser_proto.KnownItem known_items = 1; */
        for (let i = 0; i < message.knownItems.length; i++)
            KnownItem.internalBinaryWrite(message.knownItems[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated item_parser_proto.UnknownItem unknown_items = 2; */
        for (let i = 0; i < message.unknownItems.length; i++)
            UnknownItem.internalBinaryWrite(message.unknownItems[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message item_parser_proto.ParseRep
 */
export const ParseRep = new ParseRep$Type();
/**
 * @generated ServiceType for protobuf service item_parser_proto.ItemParser
 */
export const ItemParser = new ServiceType("item_parser_proto.ItemParser", [
    { name: "Parse", options: {}, I: ParseReq, O: ParseRep }
]);
