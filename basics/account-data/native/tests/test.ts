import {ProgramTestContext, start} from "solana-bankrun"
import { describe, test } from "node:test"
import { assert } from "chai"
import {PublicKey, Transaction, TransactionInstruction, Keypair} from "@solana/web3.js"
import * as borsh from "borsh"

class AddressInitializer {
    constructor(properties) {
        for (const [key, val] of Object.entries(properties)) this[key]= val;
    }
}

class AddressInfo extends AddressInitializer {
    street: any;
    city: any;
    name: any;
    house_amount: any;

    toBuffer() {
        return Buffer.from(borsh.serialize(AddressInfoSchema, this))
    }

    static fromBufffer(buffer: Buffer) {
        return borsh.deserialize(AddressInfoSchema, AddressInfo, buffer)
    }
}

const AddressInfoSchema = new Map([
    [
      AddressInfo, 
      {
        kind: 'struct',
        fields: [
          ['name', 'string'],
          ['house_number', 'u8'],
          ['street', 'string'],
          ['city', 'string'],
        ],
      },
    ],
  ]);

describe("Tests the functionality of the solana native program", async () => {
    const addresssInfoAccount = Keypair.generate();
    const PROGRAM_ID = PublicKey.unique();
    const context = await start([{name: "mock_native", programId: PROGRAM_ID}], [])
    const client = context.banksClient
    const payer = context.payer;

    it("Tests whether account is being created or not", async () => {
        const balance = await client.getBalance(payer.publicKey)
        console.log(balance)
    })
})