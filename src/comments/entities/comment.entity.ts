import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdByFirstName: string;

  @Column()
  createdByLastName: string;

  @Column()
  createdBy: string;

  @Column()
  createdById: string;

  @Column()
  referenceId: string;
} 