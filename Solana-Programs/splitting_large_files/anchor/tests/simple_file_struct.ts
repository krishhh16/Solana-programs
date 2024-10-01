import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SimpleFileStructure } from "../target/types/simple_file_structure";

describe("anchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Anchor as Program<SimpleFileStructure>;

  it("Is initialized!", async () => {
    // Add your test here.
    
  });
});
