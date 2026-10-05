'use client';

import {
  Code2, Layout, Smartphone, Sparkles,
  FileCode2, Palette, Braces, Atom, Hexagon,
  SquareCode, GitBranch, Github,
  Server, Database, Wrench,
  Target, Eye, Heart,
  Mail, Send, CheckCircle2, ArrowRight, ArrowDown,
  ExternalLink, FolderOpen, Menu, X, Phone,
  type LucideIcon as LucideIconType,
} from 'lucide-react';
import type { IconName } from '@/lib/data';

const iconMap: Record<IconName, LucideIconType> = {
  code2: Code2,
  layout: Layout,
  smartphone: Smartphone,
  sparkles: Sparkles,
  fileCode2: FileCode2,
  palette: Palette,
  braces: Braces,
  atom: Atom,
  hexagon: Hexagon,
  squareCode: SquareCode,
  gitBranch: GitBranch,
  github: Github,
  server: Server,
  database: Database,
  wrench: Wrench,
  target: Target,
  eye: Eye,
  heart: Heart,
  mail: Mail,
  send: Send,
  checkCircle2: CheckCircle2,
  arrowRight: ArrowRight,
  arrowDown: ArrowDown,
  externalLink: ExternalLink,
  folderOpen: FolderOpen,
  menu: Menu,
  x: X,
  phone: Phone,
};

export function Icon({ name, size, className }: { name: IconName; size?: number; className?: string }) {
  const Cmp = iconMap[name];
  return <Cmp size={size} className={className} />;
}


