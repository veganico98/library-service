import { NotFoundException } from "@nestjs/common";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("book")
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    category: string;

    @Column({default: true})
    available: boolean 

    @CreateDateColumn({
          type: 'timestamp',
          default: () => 'CURRENT_TIMESTAMP(6)',
      })
      createdAt: Date;
    
      @CreateDateColumn({
          type: 'timestamp',
          default: () => 'CURRENT_TIMESTAMP(6)',
          onUpdate: 'CURRENT_TIMESTAMP(6)',
      })
      updatedAt: Date;

      constructor(
        props?: {
            name: string;
            title: string;
            author: string;
            category: string;
            available?: boolean 
        },
    )   {
        if (props){
            Object.assign(this, props);
        }
    }

    verifyBook(book: Book): void{
        if(!book){
            throw new NotFoundException('Livro não encontrado!')
        }
    }
}