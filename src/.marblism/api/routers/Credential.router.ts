/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.CredentialInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).credential.createMany(input as any))),

        create: procedure.input($Schema.CredentialInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).credential.create(input as any))),

        deleteMany: procedure.input($Schema.CredentialInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).credential.deleteMany(input as any))),

        delete: procedure.input($Schema.CredentialInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).credential.delete(input as any))),

        findFirst: procedure.input($Schema.CredentialInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).credential.findFirst(input as any))),

        findMany: procedure.input($Schema.CredentialInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).credential.findMany(input as any))),

        findUnique: procedure.input($Schema.CredentialInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).credential.findUnique(input as any))),

        updateMany: procedure.input($Schema.CredentialInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).credential.updateMany(input as any))),

        update: procedure.input($Schema.CredentialInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).credential.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.CredentialCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CredentialCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CredentialCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CredentialCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.CredentialCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CredentialCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CredentialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CredentialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CredentialCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CredentialCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CredentialGetPayload<T>, Context>) => Promise<Prisma.CredentialGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.CredentialDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CredentialDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CredentialDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CredentialDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.CredentialDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CredentialDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CredentialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CredentialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CredentialDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CredentialDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CredentialGetPayload<T>, Context>) => Promise<Prisma.CredentialGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.CredentialFindFirstArgs, TData = Prisma.CredentialGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CredentialFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CredentialGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CredentialFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CredentialFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CredentialGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CredentialGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.CredentialFindManyArgs, TData = Array<Prisma.CredentialGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.CredentialFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.CredentialGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CredentialFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CredentialFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.CredentialGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.CredentialGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.CredentialFindUniqueArgs, TData = Prisma.CredentialGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.CredentialFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.CredentialGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.CredentialFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.CredentialFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.CredentialGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.CredentialGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.CredentialUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CredentialUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CredentialUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CredentialUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.CredentialUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.CredentialUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.CredentialGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.CredentialGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.CredentialUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.CredentialUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.CredentialGetPayload<T>, Context>) => Promise<Prisma.CredentialGetPayload<T>>
            };

    };
}
