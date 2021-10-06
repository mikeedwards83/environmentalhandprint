interface fs{

    readdirSync(
        path: PathLike,
        options: ObjectEncodingOptions & {
            withFileTypes: true;
        }
    ): Dirent[];

    readFileSync(
        path: PathOrFileDescriptor,
        options?: {
            encoding?: null | undefined;
            flag?: string | undefined;
        } | null
    ): Buffer;
}